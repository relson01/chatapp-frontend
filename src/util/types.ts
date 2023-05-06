import React from "react";

export type User = {
  id: string;
  name: string;
  username?: string;
  email: string;
  image: string;
};

// Dont use these
interface SearchUser {
  user: User;
  success: boolean;
  errorMsg: string | undefined;
}

export interface UserResponse {
  searchUser: SearchUser;
}

export interface LoginUserData {
  username: string;
  password: string;
}
//////

export interface UserResponse {
  user: User[];
  success: boolean;
  errorMsg: string | undefined;
}

export interface FindUserResponse {
  findUser: UserResponse;
}

export interface FindUserData {
  name: string;
}

//creating converation

export interface CreateNewConversation {
  firstUserId: String;
  secondUserId: String;
}

export interface CreateNewConversationResponse {
  createNewconversation: UserResponse;
}
