INSERT 
    INTO User 
    (  user_id,  name,     email) 
VALUES 
    ( 'u1',     'Alice',  'alice@example.com'),
    ( 'u2',     'Bob',  'bob@example.com')
;

INSERT 
    INTO Company 
    ( company_id,  name        ) 
VALUES 
    ( 'c1',       'TechCorp'   ),
    ( 'c2',       'InnoSoft'   ), 
    ( 'c3',       'DataWorks'  ), 
    ( 'c4',       'CloudNine'  ), 
    ( 'c5',       'NextGen AI' ), 
    ( 'c6',       'WebMakers'  )
; 

INSERT 
    INTO Application 
    (  application_id,  user_id,  company_id,  status,          url,                               role          ) 
VALUES 
    (  'a1',           'u1',     'c1',        'INTERVIEWING',  'https://techcorp.com/jobs/1',     'Engineer'     ),
    (  'a2',           'u1',     'c2',        'APPLIED',       'https://innosoft.com/jobs/4',     'Frontend Dev' ),
    (  'a3',           'u1',     'c3',        'REJECTED',      'https://dataworks.com/careers/9', 'Data Analyst' ),
    (  'a4',           'u1',     'c4',        'OFFER',         'https://cloudnine.com/jobs/12',   'DevOps'       ),
    (  'a5',           'u1',     'c5',        'INTERVIEWING',  'https://nextgen.ai/careers/2',    'ML Engineer'  ),
    (  'a6',           'u1',     'c6',        'APPLIED',       'https://webmakers.com/jobs/5',    'Backend Dev'  ),
    (  'a7',           'u2',     'c1',        'INTERVIEWING',  'https://techcorp.com/jobs/1',     'Engineer'     ),
    (  'a8',           'u2',     'c2',        'APPLIED',       'https://innosoft.com/jobs/4',     'Frontend Dev' ),
    (  'a9',           'u2',     'c3',        'OFFER',         'https://dataworks.com/careers/9', 'Data Analyst' ),
    ( 'a10',           'u2',     'c4',        'REJECTED',      'https://cloudnine.com/jobs/12',   'DevOps'       ),
    ( 'a11',           'u2',     'c5',        'INTERVIEWING',  'https://nextgen.ai/careers/2',    'ML Engineer'  ),
    ( 'a12',           'u2',     'c6',        'APPLIED',       'https://webmakers.com/jobs/5',    'Backend Dev'  )

;