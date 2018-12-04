<template>
  <div class="customer-container">
    <div class="message-list">
      <van-cell-group>
        <van-cell v-for="(item,index) in messagelist" :key="index" :title="item.title" border="true" :value="item.value" />
      </van-cell-group>
    </div>
    <div class="my-dialog">
      <van-cell-group>
        <van-field class="pull-left customer-text" :value="message" type="textarea" placeholder="请输入留言" autosize border="false" @change="getInputData" />
        <van-button class="pull-left customer-text-btn" size="small" type="danger" @click="sendMessage">发送</van-button>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import "./index.wxss";
var sockettask;
export default {
  data() {
    return {
      uid: '',
      message: "",
      mysocketid: '',
      messagelist: []
    }
  },
  onLoad() {
    this.uid = new Date().getTime();
    this.message = "";
    this.messagelist = [];
    this.initWebSocket();
  },
  methods: {
    initWebSocket() {
      var that = this;
      sockettask = wx.connectSocket({
        url: 'ws://192.168.199.115:2345',
        success: function(res) {}
      })
      sockettask.onMessage(function(res) {
        var object = JSON.parse(res.data);
        if (object.uid == that.uid) {
          that.messagelist.push({ title: '', value: object.data })
        } else {
          that.messagelist.push({ title: object.data, value: '' })
        }
      })
    },
    getInputData(event) {
      this.message = event.mp.detail;
    },
    sendMessage() {
      var pdata = {};
      pdata.uid = this.uid
      pdata.data = this.message;
      this.message = "";
      sockettask.send({ data: JSON.stringify(pdata) })
    }
  },
  onUnload() {
    sockettask.close(function() {})
    sockettask.onClose(function() {})
  }
}

</script>
<style scoped="">
.my-dialog {
  position: fixed;
  bottom: 0;
  background: #FFF;
  height: 100px;
  width: 100%;
  border-radius: 10px;
}

.customer-text {
  width: 80%;
}

.customer-text-btn {
  margin-top: 8px;
  margin-left: 10px;
}

.pull-left {
  float: left;
}

</style>
