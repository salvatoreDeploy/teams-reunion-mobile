import { FlatList, Text } from 'react-native';
import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='Reunir com a turma' />


      <FlatList data={groups} keyExtractor={item => item} renderItem={({ item }) => (
        <GroupCard title={item} />
      )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (<ListEmpty message='Que tal cadastrar a primeira reunião' />)}
      />

      <Button title='Criar nova turma' />

    </Container>
  );
}

