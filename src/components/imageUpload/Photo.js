import React, { PropTypes } from 'react'
import classNames from 'classnames'
import ImageUploading from './ImageUploading'

function Photo(props) {
  const {
    accept,
    errorMsg,
    fileHover, fileUploading,
    handleFileHover, handleFileSelect,
    imgInfo, progress,
    warningMsg,
  } = props

  const className = classNames({
    dropzone: true,
    ['alert-info hover']: !!fileHover,
  })

  let currentImg = null
  if (fileUploading) {
    currentImg = (
      <div className="dz-images row">
        <ImageUploading progress={progress} fileInfo={fileUploading} width="300" />
      </div>
    )
  }
  else if (imgInfo && imgInfo.previewUrl) {
    currentImg = (
      <div className="dz-image">
        <img src={imgInfo.previewUrl} alt="image" />
      </div>
    )
  }

  let txtClassName = 'help'
  let imgTxt = 'Click on the image or drop a new JPG on top of it to replace it.'
  if (errorMsg) {
    txtClassName = 'error'
    imgTxt = errorMsg
  }
  else if (warningMsg) {
    txtClassName = 'warning'
    imgTxt = warningMsg
  }

  function activateFileSelect() {
    // this.refs.fileselect.click()
    document.getElementById('fileselect').click()
  }

  return (
    <div className={className} onDragOver={handleFileHover}
      onDragLeave={handleFileHover} onDrop={handleFileSelect}
      onClick={ activateFileSelect } id="filedrag">
      {currentImg}
      <p className={txtClassName}>{ imgTxt }</p>
      <input type="file" id="fileselect" name="fileselect"
        accept={accept} onChange={handleFileSelect}
        style={{ display: 'none' }} />
    </div>
  )
}

Photo.propTypes = {
  accept: PropTypes.string.isRequired,
  handleFileSelect: PropTypes.func.isRequired,
  imgInfo: PropTypes.object,
}

export default Photo