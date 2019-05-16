import React, { PureComponent } from 'react';
import { Form, Input, Icon, Card, Button } from 'antd';
import Copyright from './copyright';
import styles from './index.less';

const FormItem = Form.Item;

@Form.create()
class Login extends PureComponent {
  login = () => {};

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    const cardTitle = <div className={styles.cardTitle}>欢迎登录</div>;

    return (
      <div className={styles.page}>
        <Card
          className={styles.card}
          title={cardTitle}
          bordered={false}
          bodyStyle={{ padding: '40px 24px' }}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('account', {
                rules: [{ required: true, message: '请输入登录帐号!', whitespace: true }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  size="large"
                  placeholder="请输入登录帐号"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入登录密码!', whitespace: true }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  size="large"
                  placeholder="请输入登录密码"
                />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" size="large" className={styles.btn}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
        <Copyright />
      </div>
    );
  }
}

export default Login;
