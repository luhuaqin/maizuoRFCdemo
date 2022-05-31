import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Image, Form, Button, Input,  } from 'antd-mobile'
import logoImg from '../assets/images/logo.png'

export default function Login() {
  const [inputName, setInputName] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const navigate = useNavigate()
  return (
    <div>
      <Grid columns={1} style={{height: '220px', alignContent: 'center'}}>
        <Grid.Item offset={8} style={{alignContent: 'center'}}>
          <Image style={{margin: '0 auto'}} width={60} height={60} src={logoImg} />
        </Grid.Item>
      </Grid>
      <Form
        layout='horizontal'
        style={{margin: '0 10px'}}
        footer={
          <Button block type='submit' color='warning' size='large' onClick={() => {
            localStorage.setItem('token', inputName)
            navigate('/center')
          }} style={{marginTop: '50px'}}>
            登录
          </Button>
        }
      >
        <Form.Item
          name='name'
          label='用户名'
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Input value={inputName} onChange={(value) => {
            setInputName(value)
          }} placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item
          name='password'
          label='密码'
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input value={inputPassword} onChange={(value) => {
            setInputPassword(value)
          }} placeholder='请输入密码' />
        </Form.Item>
      </Form>
    </div>
  )
}
