import React from 'react';

export interface BannerData {
  message: string;
  state: 'success' | 'error';
}
type Props = { banner: BannerData };

export default function Banner({ banner: { state, message } }: Props) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';

  return (
    <p
      className={`p-2 rounded-xl w-full text-center ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}>
      {`${icon} ${message}`}
    </p>
  );
}
