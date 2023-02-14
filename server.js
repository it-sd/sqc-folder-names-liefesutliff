const newFolderName = function (folders) {
  if (folders.length >= 1) {
    console.log(`New Folder (${folders.length + 1})`)
  } else {
    console.log('New Folder')
  }
}

// Test with no folders
newFolderName([])
// Test with one folder
newFolderName(['New Folder'])
// Test with three folders
newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)'])
