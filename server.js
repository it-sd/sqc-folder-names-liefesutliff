const newFolderName = function (folders) {
  const test = Array.from(folders)
  let n = 1

  if (!folders.includes('New Folder')) {
    folders.push('New Folder')
    return folders[folders.length - 1]
  }

  if (folders.length === 0) {
    // console.log(`New Folder`)
    folders.push('New Folder')
    return folders[0]
  } else {
    for (let i = 0; i < folders.length; i++) {
      if (folders.length === 0) {
        test.push('New Folder')
      }

      n++

      if (!folders.includes(`New Folder (${n})`)) {
        test.push(`New Folder (${n})`)
        return `New Folder (${n})`
      }

      if (n === folders.length) {
        test.push(`New Folder (${n + 1})`)
      } else if (folders.length === 1) {
        test.push(`New Folder (${n})`)
      }
    }

    return test[test.length - 1]
  }
}

module.exports = { newFolderName }
