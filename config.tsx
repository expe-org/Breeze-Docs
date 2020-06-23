import { Login } from "@expe-org/login";
import { List } from "@expe-org/list-module";
import { Layout } from "@expe-org/layout";
import { Announcements } from "@expe-org/announcements";
import React from "react";

const Hello = () => <h1>hello world</h1>;

const config = {
  defaults: {
    defaultComponent: Login,
    baseUrl:
      "https://cors-anywhere.herokuapp.com/api.academy.dewa.breezehq.com/en",
    layoutConfig: {
      logo: require("./assets/breeze-logo.png"),
      navigation: [
        { name: "Dashboard", url: "/" },
        { name: "Announcements", url: "/announcements" },
        { name: "Announcements Admin", url: "/announcement2" },
      ],
    },
  },
  routes: [
    {
      component: Login,
      isLayout: false,
      layout: Layout,
      API: {
        endPoint: "/employees/account/login",
        payload: {
          UserName: "",
          Password: "",
          DeviceName: "",
          DeviceModel: "",
          DeviceUuid: "",
          PushToken: "dfdssdfsdf",
          IsMobile: "true",
        },
      },
      path: "/login",
    },
    {
      component: List,
      isLayout: true,
      layout: Layout,
      API: {
        method: "GET",
        endPoint: "/employees/communication/announcements",
      },
      path: "/announcements",
    },
    {
      component: Hello,
      isLayout: true,
      layout: Layout,
      API: [],
      path: "/",
    },
    {
      component: Announcements,
      isLayout: true,
      layout: Layout,
      API: [
        {
          method: "GET",
          endPoint: "/employees/communication/announcements",
        },
        {
          method: "POST",
          endPoint: "/employees/communication/announcements/create",
          payload: {
            FileType: "Computer",
            FileList: null,
            Url: null,
            AllowPublish: false,
            Key: 0,
            SchoolID: 1,
            EmployeeKey: 1,
            Title: "Test announcement",
            Content: "content",
            MessageType: "Class",
            MessageBoardCategoryKey: 1,
            RecordID: "1",
            PostToMembers: "Staff,Student",
            PublishedDate: "2020-01-15",
            UpdatedDate: "2020-01-15",
            SendTo: null,
            LikeCount: 0,
            CommentCount: 0,
            SentCount: 0,
            FileCount: 0,
            AllowToComment: false,
            IsImportent: false,
            IsPublished: true,
            PublishedLater: false,
            IsPhoto: false,
            CreatedBy: 1,
            CreatedOn: "2019-07-15",
            IsDeleted: false,
            IsStarred: false,
            IsLiked: false,
          },
        },
        {
          method: "GET",
          endPoint: "/employees/classes",
        },
        {
          method: "POST",
          endPoint:
            "/employees/communication/announcements/delete?announcementKey=",
        },
      ],
      path: "/announcement2",
    },
  ],
};

export default config;
