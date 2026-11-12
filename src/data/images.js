// Each image loads from /images/<name>.jpg (upload into public/images).
// If the local file is missing, the original Stitch link is used as a temporary fallback.

const remote = {
  'cargo-loading': 'https://lh3.googleusercontent.com/aida/ALJJyrC1wZdnQPC0BoHRLQ-BshcYTyXf7PaktNba_TK4GslKH4CZTMHCVuDgudwGe8yMFH4hLfE5caQLMz-uZg282nLhScaqR2ld8B3HKRDNj4HniX2C3P-cZpThEpCE--24ISk9q5mWheMww2ksZouXaF4sBcv20ZB22kWj03TWfK9KSKiXKORiUJuQ20Zbn_N-0L1MnL8Cw-Aiu9bWtImR6nqqNJcdmKVs6Jth2d26Pq3pSkaW4rrRTSGMbANqtL50mxz0',
  'event-shuttle': 'https://lh3.googleusercontent.com/aida/ALJJyrANKgdnoBGsBQPTTTG2QhZIHspcTDM-uuhbRs00ewYauF_Dc4N9CS9tFZtO0JmYUIAJzSHcqSvtzFjEGtH1_Id-pADsprFayOQ4kqYHKLd_zOoqnRt985wdcayHUuK4d2-NVG6DL_etZdiJ-BP1fz9YvYuwStAGyzP9IYws9J6SoKBmHObHgXBt4M64BwOcO7i8b1OM9BgLFVwZY1mBiNXD-wh2HkJoj9YAaiJnO6bFdTh2plfVqcaLPiDE4X4',
  'executive-car': 'https://lh3.googleusercontent.com/aida/ALJJyrCPFLDoC2J3Ry6UjDFxCRY1WB1EK1Un1ZKTqgwlKmQtPU2b0TN50VwYk7VlHh5QB3qhFGSiTd5N96rVuj5QbBYaoYvRsUx-cqt8jWG-nTKcSnS_FguVN3zR9O396gZH7G7-Qv3_vtEG56qlBLPvxQ2Wk0Q21JW25sgTEuY4JYgjNJycGBnhKnuDbk6lXfh7_ciARNxz5re3t3ZCdwqwZr6Uipywde-YAVtAViA3V0pTlD_1H2cIHEOqcem3ISYp',
  'fleet-yard': 'https://lh3.googleusercontent.com/aida/ALJJyrAq6vsRhzvbZdHEoyMF0EYpWJA7OJCcqhdJrzxujIIUh55PdJvbX7ak6gEMe5nTIUWrbr1a5yGTfGzH6Xk7g6Lp3tacT6cSIbPIwUHzR3O3Ab6vTypdf-cxjpYJYxnETBlVpW71x4m4UTWAuUus2PyPzs9pTUSgkUldJQ4Y2ADKT1rv1FoF0UoBa6gZTxv074a_mumhT92wzyR7EolHT2OxA7Brl9gv_cpsRYrNCz5gijj5x043LahSv2FspOet',
  'haulage-truck': 'https://lh3.googleusercontent.com/aida/ALJJyrCmumTnvIHz_i145ith8HRmIj2J9nnYki7swMnpgdMs4-1eIjRsHKZNkbpKhR2NU6mwoDoIxlAXUqgaR-Cly2RC9_SUJDBPbPr4HEf8G7ThbUV0cFgOqoBzv5hUKWTQceSdaerW7vuyxlLUnZSLxgi8il8XISxr8CuCpoO5YaOprPxwOtn_Uq9J1PR0W72g4wYooisEPj0OJ8kqS-EeEftK8t3f225v_shba8cLiUurPKziiRdUs8ck4Dd7nD0',
  'passenger-bus': 'https://lh3.googleusercontent.com/aida/ALJJyrBPD1VlPEOLOW07T_9g-NlGwneQg8RXJVNDYrvAC4Vwu2P4cg2KNXXur_FDj6u9a0LC1w4-e2lxlZj99fOFgv39cNXQrkrffReOibxpR8PMMvGYOcfOP7siuwH4vW2T0jgPzi3HuwkPURquoxz22gSSS73mSFq8IFH-Ri_Itzgu6dqRvh_o58Bgd29PIOierXHj4REMN6kl2q6qrjaHTU8tgFVgLle1fF5dg4f865c4qThmXcjD5ajpMumoDZZ3rjkt',
};

export const img = (name) => ({
  src: `/images/${name}.jpg`,
  fallback: remote[name],
});

export const handleImgError = (e) => {
  const el = e.currentTarget;
  const name = el.dataset.name;
  if (name && remote[name] && el.src !== remote[name]) el.src = remote[name];
};

export default remote;
