# FFMPEG
## Cuts video from time to time and outputs a copy
```sh
$ ffmpeg -i input.mp4 -ss 00:05:10 -to 00:15:30 -c:v copy -c:a copy output2.mp4
```

##Compress video, crf 28 (740mb -> 330mb) crf 32 (crf 32 740mb -> 192mb)
```sh
$ ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4
```

##Take all mp4 files and convert them with the command above
```sh
$cmd$ for %i in (*.mp4) do .\ffmpeg -i "%i" -vcodec libx265 -crf 32 "compressed\%i"
```
