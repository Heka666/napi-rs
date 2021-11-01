window.BENCHMARK_DATA = {
  lastUpdate: 1635764469826,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: 'a910e47386db19cdd00ee4b898c2fdcd29ba9732',
          message: 'ci: rollback debian image to stretch',
          timestamp: '2021-11-01T18:48:28+08:00',
          tree_id: 'cd093dbfb9505fa440e3a1d2195f0ce7e0cebead',
          url: 'https://github.com/napi-rs/napi-rs/commit/a910e47386db19cdd00ee4b898c2fdcd29ba9732',
        },
        date: 1635764468567,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 50105176,
            range: '±1.37%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 735017684,
            range: '±0.58%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 16455789,
            range: '±0.94%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 722188629,
            range: '±0.89%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 349102,
            range: '±9.49%',
            unit: 'ops/sec',
            extra: '70 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 2607413,
            range: '±10.18%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 33441,
            range: '±0.87%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7102,
            range: '±0.48%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6954,
            range: '±0.82%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 16563,
            range: '±0.66%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 9339,
            range: '±0.53%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 11293,
            range: '±0.5%',
            unit: 'ops/sec',
            extra: '94 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 376406,
            range: '±5.03%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 323477,
            range: '±5.37%',
            unit: 'ops/sec',
            extra: '73 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 333207,
            range: '±5.04%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 316117,
            range: '±5.15%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 42453,
            range: '±3.52%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 340,
            range: '±3.9%',
            unit: 'ops/sec',
            extra: '60 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 27013,
            range: '±2.13%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Query#query * 100',
            value: 2027,
            range: '±1.81%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'Query#query * 1',
            value: 23591,
            range: '±3.36%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
        ],
      },
    ],
  },
}
