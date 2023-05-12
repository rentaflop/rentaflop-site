---
title: 'Rentaflop Rendering API'
excerpt: "Instructions for how to use rentaflop's API to automate your rendering."
coverImage: '/static/rentaflop_logo.png'
date: '2023-03-30T'
ogImage:
  url: '/static/rentaflop_logo.png'
---

# Rentaflop Rendering API (Work in Progress)

_March 30, 2023_

We're excited to offer a rendering API (coming soon), with which you can programmatically launch rendering jobs and download rendered outputs for your
Blender projects. This is especially useful if you have a website or company and need to automate rendering tasks to serve your clients.

## Endpoints

You can call the following endpoints to interact with the rendering API. All endpoint URLs are prefixed with "https://api.rentaflop.com/v1". For instance,
the health check endpoint lives at [https://api.rentaflop.com/v1/health](https://api.rentaflop.com/v1/health).

### **GET /health**

Description: Status check to make sure the rentaflop API is up.

Output:

```
{
    "status": 200
}
```

### **POST /upload**

Description: Receive an S3 presigned URL where you'll upload a .blend file.

Input:

```
{
    "api_key": "your_api_key_here",
    "filename": "name_of_your_file"
}
```

Output:

```
{
    "status": 200,
    "filename": key_for_s3_file,
    "url": s3_upload_url,
    "fields": connection_dictionary_for_s3_url
}
```

### **POST /confirm-upload**

Description: Notify rentaflop the upload is complete and retrieve the upload ID.

Input:

```
{
    "api_key": "your_api_key_here",
    "filename": "key_for_s3_file"
}
```

Output:

```
{
    "status": 200,
    "upload_id": upload_id_created_by_rentaflop
}
```

### **POST /render**

Description: Start a render job.

Input:

```
{
    "api_key": "your_api_key_here",
    "upload_id": upload_id_created_by_rentaflop,
    "blender_version": "desired_version" (see https://portal.rentaflop.com/rendering for available versions),
}
```

Output:

```
{
    "status": 200,
    "job_id": job_id_created_by_rentaflop
}
```

### **POST /progress**

Description: Check progress on a rendering.

Input:

```
{
    "api_key": "your_api_key_here",
    "job_id": job_id_created_by_rentaflop
}
```

Output:

```
{
    "status": 200,
    "frames_completed": number_of_frames_currently_ready_for_download,
    "total_frames": number_of_total_frames_in_rendering,
    "job_status": "Finished|Stopped|Failed|In progress"
}
```

### **POST /download**

Description: Retrieve an S3 presigned URL where you'll download the rendered frames.

Input:

```
{
    "api_key": "your_api_key_here",
    "job_id": job_id_created_by_rentaflop
}
```

Output:

```
{
    "status": 200,
    "url": s3_download_url
}
```


## An Example

This python example uses the rentaflop API to upload a project, render it, then download the results.

```
import os
import requests
import time


# read api key from environment variable
# to protect your API key, we recommend placing it in a .env file rather than putting it directly in your code
rentaflop_api_key = os.environ.get("RENTAFLOP_KEY")
rentaflop_api_url = "https://api.rentaflop.com/v1/"

# get S3 presigned url for upload
print("Retrieving upload url...")
response = requests.post(rentaflop_api_url+"upload", json={"api_key": rentaflop_api_key, "filename": "my_project.blend"})
response_json = response.json()
print("Upload url retrieved.")

# upload file directly to the rentaflop S3
print("Uploading file...")
s3_filename = response_json["filename"]
s3_upload_url = response_json["url"]
s3_fields = response_json["fields"]
files = {"file": open("my_project.blend", "rb")}
response = requests.post(s3_upload_url, data=s3_fields, files=files)
print("File uploaded.")

# let rentaflop know upload is complete and retrieve upload_id
print("Retrieving upload id...")
response = requests.post(rentaflop_api_url+"confirm-upload", json={"api_key": rentaflop_api_key, "filename": s3_filename})
response_json = response.json()
print("Upload id retrieved.")

# launch render
print("Launching render job...")
upload_id = response_json["upload_id"]
blender_version = "3.4.1"
response = requests.post(rentaflop_api_url+"render", json={"api_key": rentaflop_api_key, "upload_id": upload_id, "blender_version": blender_version})
response_json = response.json()
print("Render job launched.")

# check progress and wait for job to complete
job_id = response_json["job_id"]
print("Waiting for render job to complete...")
finished = False
while not finished:
    time.sleep(60)
    response = requests.post(rentaflop_api_url+"progress", json={"api_key": rentaflop_api_key, "job_id": job_id})
    response_json = response.json()

    frames_completed = response_json["frames_completed"]
    total_frames = response_json["total_frames"]
    job_status = response_json["job_status"]
    print(f"Completed {frames_completed} out of {total_frames} frames.")
    if job_status != "In progress":
        finished = True

print("Render job complete.")

# retrieve S3 presigned URL for download
print("Retrieving download url...")
response = requests.post(rentaflop_api_url+"download", json={"api_key": rentaflop_api_key, "job_id": job_id})
response_json = response.json()
print("Download url retrieved.")

# download job output directly from S3
print("Downloading frames...")
s3_download_url = response_json["url"]
response = requests.get(s3_download_url, stream=True)
with open('output.zip', 'wb') as f:
    f.write(response.content)

print("Download complete.")
```

We hope you find the rendering API to be useful! As always, if you run into issues or have questions feel free
to [reach out](https://portal.rentaflop.com/contact).