export const COUNT_INCREMENT = "COUNT_INCREMENT";
export const COUNT_DECREMENT = "COUNT_DECREMENT";
export const countIncrement =
  () =>
  async (dispatch: any): Promise<boolean> => {
    try {
      dispatch({
        type: COUNT_INCREMENT,
      });

      return true;
    } catch (error) {
      console.error("Error in countIncrement action:", error);
      return false;
    }
  };
export const countDecrement =
  () =>
  async (dispatch: any): Promise<boolean> => {
    try {
      dispatch({
        type: COUNT_DECREMENT,
      });

      return true;
    } catch (error) {
      console.error("Error in countIncrement action:", error);
      return false;
    }
  };
