import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCArdContainer from './GameCArdContainer';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCArdContainer>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCArdContainer>
          ))}
        {games.map((game) => (
          <GameCArdContainer>
            <GameCard game={game}></GameCard>
          </GameCArdContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
