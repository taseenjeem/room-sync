export interface Room {
  id: string;
  name: string;
  capacity: number;
  amenities: string[];
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  title: string;
  startTime: string;
  endTime: string;
}
