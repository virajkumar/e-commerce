export const POST_TYPE = "POST_TYPE";

export interface NavBarItem {
    id: number;
    title: string;
    path: string;
}
export interface NavBarItemAction {
    type: string;
    payload: NavBarItem | null;
}
export const PostReducer = (state: NavBarItem | null = null,
    action: NavBarItemAction): NavBarItem | null => {
    switch (action.type) {
        case POST_TYPE:
            return action.payload;
        default:
            return state;
    }
};