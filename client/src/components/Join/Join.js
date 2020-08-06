import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

//AntDesign
import { Form, Input, Select, Button } from 'antd'
import "antd/dist/antd.css";

const { Option } = Select;

const Join = () => {
    const onFinish = values => {
        console.log('Success: ', values)
    }

    return (
        <div className="join-outer-container">
            <div className="join-container">
                <h1>Musicord</h1>
                <Form layout='vertical' initialValues={{Room:'Bach'}} onFinish={onFinish}>
                    <Form.Item name="Name" label="Name" rules={[{ required: true }]}>
                        <Input size="large" placeholder="Enter username..." />
                    </Form.Item>
                    <Form.Item name="Room" label="Room" >
                        <Select size="large">
                            <Option value="Bach"> Bach </Option>
                            <Option value="Beethoven"> Beethoven </Option>
                            <Option value="Mozart"> Mozart</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Join room
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}

export default Join
