---
title: 'Becoming a Rentaflop Host'
excerpt: 'Instructions for how you can add your graphics cards to our crowdsourced cloud rendering network and earn money without lifting a finger.'
coverImage: '/static/blog/hosting/crypto_rig.avif'
date: '2022-04-28T'
ogImage:
  url: '/static/blog/hosting/crypto_rig.avif'
---

# Becoming a Rentaflop Host

_April 28, 2022 (updated February 17, 2023)_

Members of our global network of hardware owners are called hosts. In this post, we'll describe how you can add your graphics cards to our crowdsourced
cloud rendering network and earn money without lifting a finger.

Do you want to continue mining Ethereum, even though it's now proof of stake? Did you know GPU rendering is worth 10-100x as much as crypto mining?
Read on to learn how to double your mining rig's crypto earnings, even though Ethereum is PoS, and put your hardware to work helping people.
If you want a quickstart, please skip to the System Requirements section.

## Why We're Different

Rentaflop miner is different from most cryptocurrency mining software because it's often not even mining cryptocurrency. When you run rentaflop miner,
your hardware solves computational tasks to help others create projects in 3D animation. When no tasks are available,
your hardware mines cryptocurrency to ensure it's always earning you the most. As a result, we're really
two miners wrapped into one: a traditional crypto miner that mines cryptocurrency directly, and a special task miner that securely runs our users'
computing tasks. The task miner runs whenever a user submits a task, such as 3D rendering jobs, on our website.
The task is then broken up and run in parallel across our network, composed of all the computers running rentaflop miner. This means your hardware
is doing useful work to help people while always maximizing your crypto payout. We use [t-rex miner](https://trex-miner.com/) for the traditional miner, which runs
in the downtime when no rendering tasks are available.

## Payouts

Let's talk about your money. There are two types of payouts on rentaflop miner, one for each of the two types of mining we do. This means you get paid separately for the
traditional and task miner. Rentaflop miner is free to use. For the traditional miner, we take no fee and you get paid directly from the mining pool of your choice. For the task miner, we're paid
by our rendering customers in USD, convert the payments to crypto, then pay you that crypto as a bonus (on top of what you automatically get from the traditional miner)
when you meet our threshold requirements (.1 ETH or .01 BTC paid every Monday at 12PM ET). The amount earned per hour from the task miner will typically be larger than that of the traditional miner
since your hardware is performing high-value work. However, you may initially find task miner payouts to be smaller than traditional payouts
because we're still growing and won't always have tasks for your hardware to process. In the event the bonus is 0, rentaflop miner will
behave like a traditional crypto miner and you'll receive a payout comparable to that of other miners.

For the task miner, you may choose to be paid in Ethereum (ETH), even post-merge, or Bitcoin (BTC). For the traditional miner, you may select any crypto currency
and also configure the hashing algorithm, pool you'd like to mine to, etc., as long as they're compatible with t-rex miner. Instructions for configuration are found
in the Setting Up Rentaflop Miner on HiveOS section.

## System Requirements

There are only a few hard requirements for running rentaflop miner.
Here are the minimum basic system requirements:

1. 1\. A discrete Nvidia graphics card from the last several years (10, 20, or 30 series)
1. 2\. About 8GB free storage
1. 3\. HiveOS

If you're not currently running HiveOS, we recommend getting a reliable
16+GB flash drive with at least 100MB/s write speed (typically under $10) and following the GPU instructions for [HiveOS installation](https://hiveon.com/install/) to create a bootable USB. We like this route because
it allows you to separate mining from personal business. You can boot the USB when you want to mine and boot your other drive when you want
to do gaming or use your graphics card(s) otherwise.
We currently support all Nvidia 40, 30, 20, and most 10 series (1060 and above) GPUs.

## Setting Up Rentaflop Miner on HiveOS

To set up rentaflop miner on HiveOS, you'll need to add rentaflop as a trusted user to your farm as well as email us your wallet address.

Adding Rentaflop as a trusted user allows rentaflop to configure your machine to run our miner, and it enables us to fix any bugs that could arise in the future.
You can add us by going to [https://the.hiveos.farm](https://the.hiveos.farm) and selecting your farm, then clicking "access" and "trust user".
Next, give "support@rentaflop.com" access level "advanced" and select "user must have 2FA enabled".

We use Coinbase to conduct payouts, so if you want to maximize your earnings and reduce transaction costs make sure to use a Coinbase wallet address
for the following step and opt in to "instant sends" on
[the Coinbase website](https://www.coinbase.com/settings/privacy-rights). If you decide against this, then a small transaction fee we must pay to Coinbase will slightly reduce your
payout amounts.

To complete the set up, email us at [support@rentaflop.com](mailto:support@rentaflop.com) with the following information:
1. 1\. Email address we can reach you at for important communications
1. 2\. Wallet address for the task miner (BTC or ETH)
1. 3\. Indicate whether or not you'd also like to run the optional traditional crypto miner (t-rex) in the downtime when no render tasks are available

If you answered "no" to running the traditional crypto miner, no additional information is needed. If "yes", please also provide the following, ensuring it's
compatible with t-rex miner as well as the wallet address (--user) you've configured:

1. 4\. Configuration parameters you'd like to pass to t-rex miner. You may specify any [t-rex configuration options](https://github.com/trexminer/T-Rex) (and if you're unsure, then we can get you started with some good defaults).
Notably, you may select a separate currency/wallet to use for t-rex than the one you specified above for the rentaflop task miner payouts. To do so, set the --user
parameter. Here's an example that sets the --user parameter to use an ETC wallet (for t-rex traditional crypto mining)
and configures an optional rig name and network timout limit:

```
--user 0x813B628699bd918dB85542D7259c40DA6DD6554D -w rentaflop_rig1 --timeout 300
```
1. 5\. Desired hash algorithm
1. 6\. Pool URL

After completing these steps, we'll configure rentaflop miner for you and notify you when the set up is complete. If you run into issues with the above instructions
or have questions, please reach out to [support@rentaflop.com](mailto:support@rentaflop.com), and we'll help you get running.

Note: you may make changes, such as using a different email or wallet address, to your configuration at any time. You will be paid your bonus payout in
whichever cryptocurrency corresponds to the wallet address you have set at the time the payout is calculated. 

We hope you enjoy running rentaflop miner and get satisfaction from earning extra crypto while helping 3D animation artists. Happy mining!

## Miner Status Dashboard

To see information on your devices running rentaflop miner, please visit the [miner dashboard](https://portal.rentaflop.com/miner) page and enter your wallet address.
The dashboard is still in beta, and we're adding more soon.

## Recommendations

We provide some recommendations to improve your hardware's profitability. These are in addition to anything, such as overclocking, you might already do to improve your
hash rate for a traditional crypto miner. In general, whatever you do to increase the rate at which your rig can complete rendering tasks will also
tend to increase your bonus payout.

1. 2 CPU threads per GPU. The GPU does most of the work, but having enough CPU for data transfer/processing sometimes helps.
1. 8GB RAM.
1. Storage with fast read and write speeds.
1. 10 Mbps Internet bandwidth per GPU. This number shrinks as the number of GPUs grows and usually isn't a problem, but it's possible for bandwidth to be a bottleneck when your rig receives many tasks simultaneously.
1. 16X PCIE connection for GPUs. 1X connection works fine, but if you can manage 16X you'll avoid occasional data transfer slowdowns.

## Questions and Troubleshooting

What are your questions? How can we help you get started with rentaflop miner? Please reach out to [support@rentaflop.com](mailto:support@rentaflop.com).
