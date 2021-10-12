import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css'
import { Form, Input, Button, Checkbox, Upload, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { db } from './FirebaseConfig';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            domain: '',
            dob: '',
            role: '',
            linkedin_url: '',
            github_url: '',
            other_url: '',
        }
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
        this.setState({
            name: values.name,
            email: values.email,
            domain: values.domain,
            dob: values.dob,
            role: values.role,
            linkedin_url: values.linkedin_url,
            github_url: values.github_url,
            other_url: values.other_url
        })

        this.addMembers();
    };

    // normFile = (e) => {
    //   console.log('Upload event:', e);

    //   if (Array.isArray(e)) {
    //     return e;
    //   }

    //   return e && e.fileList;
    // };

    addMembers = async () => {
        let myRef = db.ref('pafkietmembers').push();
        let key = myRef.key;
        myRef.update({
            id: key,
            name: this.state.name,
            email: this.state.email,
            domain: this.state.domain,
            dob: this.state.dob,
            role: this.state.role,
            linkedin_url: this.state.linkedin_url,
            github_url: this.state.github_url,
            other_url: this.state.other_url
        }).then(() => {
            console.log("Members Addes Successfully!")
        })
        // const db =  db.ref(`pafkietmembers/${this.state.id}`)
        //   const db = firebase.firestore()
        //   const docRef = db.collection('members').doc();
        //   await docRef.add({
        //     name:this.state.name,
        //     email: this.state.email,
        //     domain: this.state.domain,
        //     dob: this.state.dob,
        //     role: this.state.role,
        //     linkedin_url: this.state.linkedin_url,
        //     github_url: this.state.github_url,
        //     other_url: this.state.other_url
        //   });

    }

    render() {
        // console.log('ye hai value',this.state.firstname)
        return (
            <div className={'MainContainer'}>
                <div className={'formBox'}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <div style={{ textAlign: 'center' }}><h1>Add Members</h1></div>
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<MailOutlined className="site-form-item-icon" />}
                                type="email"
                                placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="dob"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Date Of Birth!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<LockOutlined className="site-form-item-icon" />}
                                // type="password"
                                placeholder="Date Of Birth"
                            />
                        </Form.Item>

                        <Form.Item
                            name="domain"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your domain!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<LockOutlined className="site-form-item-icon" />}
                                // type="password"
                                placeholder="Enter Domain"
                            />
                        </Form.Item>

                        <Form.Item
                            name="role"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Role!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<LockOutlined className="site-form-item-icon" />}
                                // type="password"
                                placeholder="Role"
                            />
                        </Form.Item>

                        <Form.Item
                            name="linkedin_url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Linked Url!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="LinkedIn Url" />
                        </Form.Item>
                        <Form.Item
                            name="github_url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Github Url!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Github Url!" />
                        </Form.Item>

                        <Form.Item
                            name="other_url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Other Url!',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<LockOutlined className="site-form-item-icon" />}
                                // type="password"
                                placeholder="Other url"
                            />
                        </Form.Item>

                        <Form.Item
                            name="upload"
                            label="Upload"
                            valuePropName="fileList"
                            // getValueFromEvent={normFile}
                            extra="Not Working Yet"
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );


    }

};
export default App