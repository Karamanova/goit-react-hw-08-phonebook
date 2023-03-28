import { createSelectorHook, useDispatch } from "react-redux";

export const useRedux = () => {
  const useSelector = createSelectorHook();
  const dispatch = useDispatch()

  return [dispatch, useSelector];
};