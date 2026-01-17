import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  accentColor: string;
  icon: React.ReactNode;
  features: Feature[];
  liveDemoUrl: string;
  problems: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}