const initialStateCostumer = {
  fullname: "",
  ID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCostumer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        ID: action.payload.ID,
        createdAt: action.payload.createdAt,
      };
    case "account/updateCustomer":
      return { ...state, fullname: action.payload };

    default:
      return state;
  }
}

export function createCustomer(fullname, ID) {
  return {
    type: "customer/createCustomer",
    payload: { fullname, ID, createdAt: new Date().toISOString },
  };
}

export function updateName(fullname, ID) {
  return {
    type: "account/updateName",
    payload: { fullname },
  };
}
