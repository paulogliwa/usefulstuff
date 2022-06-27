# General
### Downloading all links from FileWithLinks and puts them in DownloadFolder with progress  
```$ wget -i FileWithLinks -P DownloadFolder -q --show-progress```
### Converting from dos to unix (removes /r and other characters from scripts created on a Windows machine)
```$ dos2unix setup.sh```

### Generating random stuff
```
for (( i=0; i<=$1; i++ ))
do
	alfanumCodeUno=$($RANDOM | md5sum | head -c 7)
	alfanumCodeDos=$(openssl rand -hex 7 | head -c 7)
	stringCode=$(cat /dev/urandom | tr -dc '[:alpha:]' | fold -w 7 | head -n 1)
done
```

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

# Word/line count   
```$ wc -l file.txt```   
```$ wc -w file.txt```   

# JQ
Filtering through JSON and outputting one or another field from an array  
```$ jq '.items[] | if .oneField == null then .anotherField else .oneField end' source.json```
   
Filtering through JSON and outputting two fields as arrays  
```jq ".emoji[] | [.name,.url]"```

Returns item count   
```jq ".items[] | length" file.json```

# Printing   
Listing all printers   
```lpstat -p```
