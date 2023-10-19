import { Box } from '@mui/material'
import React from 'react'
import DocViewer, {DocViewerRenderers} from 'react-doc-viewer'
const Preview = ({ file }) => {
    const doc = [
        {
            uri: URL.createObjectURL(file),
            fileType: file.type,
            fileName: file.name
        }
    ];
    console.log(doc);
    return (
        <DocViewer documents={doc} pluginRenderers={DocViewerRenderers}/>
    )
}

export default Preview