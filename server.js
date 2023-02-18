const newFolderName = function (folders) {
  const test = Array.from(folders)
  let n = 1

  if (!folders.includes('New Folder')) {
    folders.push('New Folder')
    return folders[folders.length - 1]
  }

  for (let i = 0; i < folders.length; i++) {
    n++

    if (!folders.includes(`New Folder (${n})`)) {
      test.push(`New Folder (${n})`)
      return `New Folder (${n})`
    }

    if (n === folders.length) {
      test.push(`New Folder (${n + 1})`)
    }
  }
}

module.exports = { newFolderName }
