import { getUserAccounts } from '@/actions/dashboard'
import React from 'react'
import AddTransactionForm from '../_components/transaction-form';
import { defaultCategories } from '@/data/categories';
import { getTransaction } from '@/actions/transaction';

const AddTransactionPage = async ({searchParams}) => {
    const accounts = await getUserAccounts();

    const editId = searchParams.edit;

    let initialData = null;
    if(editId){
      const transaction = await getTransaction(editId);
      initialData = transaction;
    }

  return (
    <div  className='max-w-3xl mx-auto px-5'>
      <h1 className='text-5xl md:text-5xl mb-8 lg:text-[50px] text-purple-600 font-extrabold tracking-tighter pr-2 bg-clip-text'>{editId?"Edit ":"Add "}Transaction</h1>

      <AddTransactionForm 
      accounts={accounts} categories={defaultCategories} editMode={!!editId} initialData={initialData}
      />
    </div>
  )
}

export default AddTransactionPage
