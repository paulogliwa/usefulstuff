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

# JQ
Filtering through JSON and outputting one or another field from an array  
```$ jq '.items[] | if .oneField == null then .anotherField else .oneField end' source.json```
