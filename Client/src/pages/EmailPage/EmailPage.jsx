import MembersTable from "../../components/members/MembersTable";
import {Container,Row,Col} from "react-bootstrap"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./emailPage.css";
import React, { Component } from 'react';



function EmailPage(){
    return (
            <Container>
                <Row>
                <CKEditor
                    className="edit"
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                </Row>
                <Row>
                    <Col xs={6}><MembersTable /></Col>
                </Row>
            </Container>
    )
}

export default EmailPage;