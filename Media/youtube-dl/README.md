# Downloads best quality video with sound (needs ffmpeg)

```sh
(youtubedl jest martwe, uzyj yt-dlp) $ youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4 'http://www.youtube.com/watch?v=P9pzm5b6FFY'
```

```sh
$ yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4 'http://www.youtube.com/watch?v=P9pzm5b6FFY'
```

# Save every link from kev.txt file
```sh
.\yt-dlp.exe -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4 -a kev.txt
```
