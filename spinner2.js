const frames = ['\r|   ', '\r/   ', '\r-   ', "\r\\   \n"];
time = setTimeout(() => 0)

for (let frame of frames) {
  setTimeout(() => {process.stdout.write(frame)}, time += 200)
}