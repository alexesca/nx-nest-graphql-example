import { Args, Mutation, Query, Resolver, Field, Int, InputType, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class SetEntity {
    @Field(type => ID, { nullable: true })
    id: number;
    @Field({ nullable: true })
    name: string;
    @Field(type => Int, { nullable: true })
    numParts: number;
    @Field({ nullable: true })
    year: string;
}


@Resolver('Set')
export class SetResolver {
    private sets: SetEntity[] = [
        {
            id: 1,
            name: 'Voltron',
            numParts: 2300,
            year: '2019'
        },
        {
            id: 2,
            name: 'Ship in a Bottle',
            numParts: 900,
            year: '2019'
        }
    ];

    @Query(returns => [SetEntity])
    getAllSets(): SetEntity[] {
        return this.sets;
    }


    @Mutation(returns => SetEntity)
    addSet(
        @Args({ name: 'name' }) name: string,
        @Args({ name: 'year' }) year: string,
        @Args({ name: 'numParts', type: () => Int }) numParts: number
    ) {
        const set: SetEntity = {
            id: this.sets.length,
            name,
            year,
            numParts
        }

        this.sets.push(set);

        return set;
    }
}