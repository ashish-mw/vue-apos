# Vue Apos POC

- Vue docs - https://vuejs.org/v2/guide/

# Setup

```
$ cd client
$ npm i
$ node app.js apostrophe-users:add admin admin
```

- Log into the Apostrophe dashboard
- Add auth module to the list of pages
- Assuming we gave a route called `/user`
- `/user/login` and `/user/mleh` should load up the 2 pages
- The Vue js script file is in `apostrophe-assets/public/js`