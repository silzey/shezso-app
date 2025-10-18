

import type { Product } from './product';
import type { Timestamp, FieldValue } from 'firebase/firestore';

export interface Review {
    id: string; // reviewId
    userId: string; // uid
    targetId: string; // e.g., dispensaryId
    targetType: 'dispensary' | 'product';
    rating: number;
    text: string;
    photos?: string[]; // URLs to images in Storage
    likesCount?: number;
    commentsCount?: number;
    createdAt: Timestamp | string;
    updatedAt?: Timestamp | string;
    // For display purposes, denormalized
    userName: string;
    userAvatar: string;
    followers?: number;
}

export interface Dispensary {
    id: string;
    name: string;
    logo: string;
    hint: string;
    rating: string;
    deliveryTime: number;
    address: string;
    state: string;
    hours: string;
    lat: number;
    lng: number;
    reviews?: Review[];
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  memberSince: string; // ISO String
  avatarUrl: string;
  dataAiHint?: string;
  points?: number;
  nextReward?: number;
  bio?: string;
  followers?: string[];
  following?: string[];
  reviewsToday?: number;
  receiptsThisWeek?: number;
  followersCount?: number;
  followingCount?: number;
  tier?: string;
  nextTier?: string;
  pointsToNextTier?: number;
}

export interface Receipt {
    id: string; // receiptId
    userId: string;
    imageUrl: string; // Path in Firebase Storage
    totalAmount: number;
    createdAt: string; // ISO String
    status: 'pending' | 'approved' | 'rejected';
    pointsAwarded?: number;
     // Denormalized for display
    userName?: string;
    userAvatar?: string;
}

export interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Chat {
    id: string;
    name?: string; // For group chats
    participants: string[];
    lastMessage: string;
    timestamp: number | Timestamp;
    type: 'group' | 'private';
    createdAt: Timestamp;
    avatar?: string; // For group chats
}

export interface ChatMessage {
    id: string;
    senderID: string;
    text: string;
    timestamp: number | Timestamp | FieldValue;
    likes: number;
    isLiked: boolean;
    replyingTo?: {
        user: string;
        text: string;
    };
    imageUrl?: string;
    userName: string;
    userAvatar: string;
    type: 'text' | 'image';
}


export interface UploadItem {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedAt: Timestamp | string;
}
