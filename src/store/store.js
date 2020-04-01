/** 此處定義全部的 store */
import React from 'react';
import HomeStore from '@container/Home/store/HomeStore';
import {MobXProviderContext} from 'mobx-react';

function useStores() {
  return React.useContext(MobXProviderContext);
}

export {HomeStore, useStores};
