setTimeout �ݩ�D�P�B�Ҧ��A�ҥH�|���Q��b task queue ���ݰ���A�� stack �̪��F�賣���槹����AEvent Loop �o�{ stack �O�Ū��N�� task queue �� setTimeout ���F�讳�h stack ����A�ҥH�@�}�l�i�J�j��A�q i = 0 �}�l�Aconsole.log('i', 0)�A��X 0�A���۸I�� setTimeout ���F��A��L���h WebAPIs(���ɶ���F�A��� task queue)�A���� i = 1�A���ƤW���ʧ@�A���� i = 5 �ɡA�j�鵲���A���ɡAstack �ŤF�Atask queue �����ӵ��ݰ��檺�F��AEvent Loop ��b task queue �̵��ݰ��檺�F���� stack �h����A���� i = 5�A�ҥH�|��X 5 �� 5�A��X���G�p�U�G

����X 0 �� 4�A���� �C�� 5 �����j���۹j�@����X
```
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5
```