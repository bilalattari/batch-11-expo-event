export interface EventInterface {
    location: {
        lat: number;
        long: number;
    };
    _id: string;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    thumbnail: string;
    startDate: string;
    endDate: string;
    address: string;
    createdBy: {
        _id: string;
        fullname: string;
        email: string;
        profileImg: string;
    };
    category: {
        _id: string;
        title: string;
    };
    going?: Array<{
        _id: string;
        fullname: string;
        email: string;
        profileImg: string;
    }>;
    __v: number;
}
