<template>
  <div class="container">
      <div class="file-section">
          <div class="file-header">
              <h3>文件库</h3>
              <span>
                  <i class="el-icon-circle-plus"></i>
                  <p>创建文件夹</p>
              </span>
              <span>
                  <i class="el-icon-upload"></i>
                  <p>上传</p>
              </span>
          </div>
          <div class="file-tip">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  height: 450px;
  background: rgba(255, 255, 255, 0.671);
  border-radius: 4px;
  padding-bottom: 90px;
  .file-section{
      .file-header{
          font-size: 18px;
          padding: 20px;
          h3{
            //   font-weight: 600;
          }
          h3,span{
              display: inline-block;
          }
          span{
              margin-right: 10px;
              font-size: 16px;
              cursor: pointer;
              p,i{
                  display: inline-block;
              }
              i{
                  margin-right: 10px;
                  color: rgb(108, 159, 255);
              }
              &:nth-of-type(1){
                  margin-left: 880px;
              }
          }
          width: 95%;
          margin: 0px auto;
          border-bottom: 1px solid rgb(120, 124, 124);

      }
  }
}
</style>