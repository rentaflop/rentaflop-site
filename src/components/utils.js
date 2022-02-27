export function https_log(log, log_level) {
  var logApiUrl = 'https://portal.rentaflop.com/api/log'
  fetch(logApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: log, level: log_level })
  });
} 
