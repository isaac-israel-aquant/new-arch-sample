import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import { Creators as investigationReducer, Types } from '../../store/duckers/investigation';

import { ViewName } from '../../constants/ViewName';
import { FCView } from '../../types/View';
import useAppSelector from '../../hooks/useAppSelector';
import LoggerManager from '../../utils/manager/Logger';


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});


const WhatIsTheProblemScreen: FCView = () => {
  const dispatch = useDispatch()
  const investigation = useAppSelector(({ investigation }) => investigation)

  const onStartNewInvestigationPress = () => {
    LoggerManager.info("onStartNewInvestigationPress : Call the create Investigation action");
    dispatch(investigationReducer.createInvestigation())
  }

  return (
    <Container style={styles.container}>
      {Boolean(investigation.id) && (
        <Text>{`Investigation is created by id : ${investigation.id}`}</Text>
      )}
      <TouchableOpacity onPress={onStartNewInvestigationPress}>
        <Text>Start New Investigation</Text>
      </TouchableOpacity>
    </Container>
  )

};

WhatIsTheProblemScreen.displayName = ViewName.WHAT_IS_PROBLEM_SCREEN;

export default WhatIsTheProblemScreen;
