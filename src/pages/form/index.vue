<style scoped>
</style>


<template>
  <div>
    <Card :style="{marginTop: '30px', padding: '30px'}">
      <Form
        :model="formItem"
        :label-width="80"
      >
        <FormItem label="姓名">
          <Input
            v-model="formItem.input"
            placeholder="请输入您的姓名"
          ></Input>
        </FormItem>
        <FormItem label="所在城市">
          <Select
            v-model="formItem.select"
            placeholder="请选择您的城市"
          >
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="深圳">深圳</Option>
          </Select>
        </FormItem>
        <FormItem label="日期选择">
          <Row>
            <Col span="11">
            <DatePicker
              type="date"
              placeholder="请选择日期"
              v-model="formItem.date"
            ></DatePicker>
            </Col>
            <Col
              span="2"
              style="text-align: center"
            >-</Col>
            <Col span="11">
            <TimePicker
              type="time"
              placeholder="请选择时间"
              v-model="formItem.time"
            ></TimePicker>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="性别">
          <RadioGroup v-model="formItem.radio">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="爱好">
          <CheckboxGroup v-model="formItem.checkbox">
            <Checkbox label="吃东西"></Checkbox>
            <Checkbox label="睡觉"></Checkbox>
            <Checkbox label="跑步"></Checkbox>
            <Checkbox label="看电影"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="开关">
          <i-switch
            v-model="formItem.switch"
            size="large"
          >
            <span slot="open">开</span>
            <span slot="close">关</span>
          </i-switch>
        </FormItem>
        <FormItem label="备注">
          <Input
            v-model="formItem.textarea"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="请输入..."
          ></Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="submit"
          >提交</Button>
          <Button
            style="margin-left: 8px"
            @click="cancel"
          >取消</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import Layout from "../../components/layout";

export default {
  data() {
    return {
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        textarea: ""
      }
    };
  },
  components: {
    Main: Layout
  },
  methods: {
    submit() {
      console.log(this.formItem);
    },
    cancel() {
      this.formItem = {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        textarea: ""
      };
    }
  }
};
</script>