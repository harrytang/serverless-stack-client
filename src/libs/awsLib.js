/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-04 19:10:33
 * @Last Modified by:   Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-04 19:10:33
 */
import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}
