# React模板项目,方便后续小的程序开发，省的每次都架构一遍

#### 使用技术架构

- react
- axios
- styled-components
- styled-px2vw-plugin
- react-router
- redux

#### 特性功能

##### 1. log美化

```javascript
import {log} from "@/common/log"

...
log("TAG", "content1", "content2", ...)
```

##### 2.消息通知

```javascript
import {notify} from "@/components/NotificationCenter/notificationHandler"

...
notify("start app success")
```
