import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Join.css'

//AntDesign
import { Form, Input, Select, Button } from 'antd'
import "antd/dist/antd.css";

const { Option } = Select;

const Join = () => {

    const history = useHistory();
    const onFinish = values => {
        //console.log(values);
        history.push(`/chat?name=${values.name}&room=${values.room}`);
    }

    return (
        <div className="join-outer-container">
            <div className="join-container">
                <h1>Musicord</h1>
                <Form layout='vertical' initialValues={{ room: 'Bach' }} onFinish={onFinish}>
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input size="large" placeholder="Enter username..." />
                    </Form.Item>
                    <Form.Item name="room" label="Room" >
                        <Select size="large">
                            <Option value="Bach"> Bach </Option>
                            <Option value="Beethoven"> Beethoven </Option>
                            <Option value="Mozart"> Mozart</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            Join room
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}

export default Join
