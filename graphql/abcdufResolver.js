const resolvers = {
  Query: {
    getPremiumAdjustment: (parent, args, context, info) => {
      // Placeholder data for demonstration
      const adjustments = [
        {
          id: "1",
          Comment: "Initial adjustment",
          Total_Borrower_Fees: 100.0,
          CU_Retail_Rate: 3.5,
          Protected_Loan_Amount: 50000.0,
          Pay_Rate: 3.0,
          Premium_Due: 1500.0,
          Total_Amount: 51500.0,
        },
        // More adjustments can be added here
      ];

      return adjustments.find(adj => adj.id === args.id);
    },
  },

  Mutation: {
    editPremiumAdjustment: (parent, { input }, context, info) => {
      // This is a placeholder to demonstrate mutation resolver
      // Usually involves modifying data and returning the updated record
      const updatedAdjustment = {
        id: input.id,
        Comment: input.Comment,
        Total_Borrower_Fees: input.Total_Borrower_Fees,
        CU_Retail_Rate: input.CU_Retail_Rate,
        Protected_Loan_Amount: input.Protected_Loan_Amount,
        Pay_Rate: input.Pay_Rate,
        Premium_Due: input.Premium_Due,
        Total_Amount: input.Total_Amount,
      };
      // Be sure to update the data store with updatedAdjustment here

      return updatedAdjustment;
    },
  },
};
//

export default resolvers;