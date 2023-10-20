import { Box, Typography, Container, Button } from '@mui/material'
import React, { useState } from 'react'
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer'
import { blue, grey } from '@mui/material/colors'
import Divider from '@mui/material/Divider'
import Config from './Config'
const Preview = ({ file }) => {
    const doc = [
        {
            uri: URL.createObjectURL(file),
            fileType: file.type,

        }
    ];
    const [config, setConfig] = useState(false)
    return (
        config === false ? (
            <Box sx={
                {
                    display: {
                        xs: 'block',
                        sm: 'flex'
                    },
                    alignItems: 'center'
                }
            }>
                <Container>
                    <Button variant='outlined' sx={{
                        border: '0.1rem solid',
                        borderRadius: '2rem',
                        fontSize: {
                            xs: '0.7rem',
                            sm: '1rem',
                            md: '1.2rem',
                            lg: '1.5rem',
                            xl: '2rem'
                        }
                    
                    }}
                        onClick={()=>setConfig(true)}
                        color='error'
                    >Thiết lập thông số in</Button>
                </Container>
                <Divider orientation='vertical' flexItem color={grey[700]}></Divider>
                <Container
                    sx={{
                        height: {
                            xs: '100px',
                            sm: 'auto'
                        },
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }}
                >
                    <Typography variant='h5'
                        sx={{
                            color: blue[500],
                            textShadow: `1px 1px 1px` + grey[900]
                        }}
                    >{file.name}</Typography>
                    <DocViewer
                        documents={doc}
                        config={{
                            header: {
                                disableHeader: true,
                                disableFileName: true,
                                retainURLParams: false,
                            },
                            pdfZoom: {
                                defaultZoom: 2.0,
                                zoomJump: 0.3,
                            }
                        }
                        }

                        pluginRenderers={DocViewerRenderers} />
                </Container>
            </Box>
        ) : (
            <Config file={file}/>
        )
    )
}

export default Preview