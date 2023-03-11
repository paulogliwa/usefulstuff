#!/bin/bash

FILETOREAD="$1"
echo "====Program start===="

while read LINETHATWASREAD; do
	("./myOtherScript" $LINETHATWASREAD)
done <$FILETOREAD

echo "=====Program end====="
