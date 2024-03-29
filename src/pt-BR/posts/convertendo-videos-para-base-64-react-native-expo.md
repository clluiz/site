---
layout: post.njk
permalink: /pt-BR/blog/convertendo-videos-para-base-64-react-native-expo.html
date: 2023-04-01
description: Dica rápida para uso de streams e otimização de memória em React Native
title: Uso de streams para converter videos para base 64
locale: pt-BR
---


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
      const chunk = await FileSystem.readAsStringAsync(videoUri, {
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