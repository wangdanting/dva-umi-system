import React, { PureComponent } from 'react';
import { Form, Input, Icon, Card, Button } from 'antd';
import { connect } from 'dva';
import Copyright from './copyright';
import styles from './index.less';

const FormItem = Form.Item;

@connect(({ login }) => ({
  loading: login.loading,
}))
@Form.create()
class Login extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    const {
      form: { validateFields },
      dispatch,
    } = this.props;
    validateFields((err, values) => {
      if (!err) {
        const { account, password } = values;
        dispatch({
          type: 'login/login',
          payload: {
            account,
            password,
          },
        });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      loading,
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
                  placeholder="请输入登录帐号/15000000003"
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
                  placeholder="请输入登录密码/111111"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.btn}
                loading={loading}
              >
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
