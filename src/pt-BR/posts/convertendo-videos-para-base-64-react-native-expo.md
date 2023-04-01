# Dicas rápidas

Se você, por alguma razão, precisar converter um vídeo para string base 64 em um app usando React Native ou Expo, use o seguinte código:

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

  Sempre considere o uso De streams ao processar arquivos grandes em javascript! Se você #nodejs #javascript quiser saber mais sobre streams, leia a [documentação](https://nodejs.org/dist/latest-v18.x/docs/api/stream.html) do @nodejs.