# Tips

If, for some reason, you need to convert a large video file to a base64 string in a React Native or Expo app, you can use the code in the image below.

```javascript
const convertVideoToBase64String = async (videoUri) => {
    const fileSize = await FileSystem.getInfoAsync(videoUri, {
      size: true,
    });
    const bufferSize = 64 * 1024; // use a buffer size of 64 KB
    let offset = 0;
    let videoAsBase64 = '';

    while (offset < fileSize.size) {
      const chunkSize = Math.min(bufferSize, fileSize.size - offset);
      const options = {
        encoding: FileSystem.EncodingType.Base64,
        length: chunkSize,
      };
      const chunk = await FileSystem.readAsStringAsync(capturedFromCamera.uri, {
        ...options,
        position: offset,
      });
      videoAsBase64 += chunk;
      offset += chunkSize;
    }
    return videoAsBase64;
  }
```

Remember to always think in streams when processing large files in javascript! If you #nodejs #javascript want to know more about streams read the @nodejs [docs](https://nodejs.org/dist/latest-v18.x/docs/api/stream.html).