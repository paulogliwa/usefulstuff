# General
### Downloading all links from FileWithLinks and puts them in DownloadFolder with progress  
```$ wget -i FileWithLinks -P DownloadFolder -q --show-progress```

# WSL
### Resetting wsl password
Open powershell and type   
```$ wsl -u root```   
Now you're root in WSL so you can reset your password   
```$ passwd <WSL Username>```

### Creating symlink to windows folder
Make ~/folder point to /mnt/d   
```$ ln -s /mnt/d/Other/LinuxLink ~/WindowsLink```

# ZIP
```$ zip filename.zip directory_with_files/```

# Text Manipulation
Removing s character from input   
```$ tr -d s```

# Sorting entries in a file and removing duplicates
```$ sort file.csv | uniq```

# JQ
Filtering through JSON and outputting one or another field from an array  
```$ jq '.items[] | if .oneField == null then .anotherField else .oneField end' source.json```
   
Filtering through JSON and outputting two fields as arrays  
```jq ".emoji[] | [.name,.url]"```
